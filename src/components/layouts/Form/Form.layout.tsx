import React, { useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useHeaderHeight } from '@react-navigation/elements';
import { relativeX, relativeY } from '@utils/constants/Layout.const';
import { Formik } from 'formik';
import BaseInput from '@components/inputs';
import { PrimaryButton } from '@components/buttons';
import RowLayout from '@components/layouts/Row.layout';
import { theme } from '@utils/themes';
import * as yup from 'yup';
import { FieldError, FormLayoutProps, OptionalValue } from './Form.types';
import { useActions } from '@hooks/useActions';

const width = 93;

export default function FormLayout<T>(
  props: FormLayoutProps<OptionalValue<T>>,
) {
  const height = useHeaderHeight();

  const { inAppNotification } = useActions();

  const validationSchema = useMemo(
    () =>
      yup.object().shape(
        props.fields.reduce((prev, curr) => {
          if (curr.type === 'double') {
            prev[curr.row[0].key] = curr.row[0].validationSchema;
            prev[curr.row[1].key] = curr.row[1].validationSchema;
          } else {
            prev[curr.key] = curr.validationSchema;
          }
          return prev;
        }, {} as { [key in keyof T]: yup.AnySchema<T[keyof T] | undefined, yup.AnyObject> }),
      ),
    [],
  );

  const initialValues = useMemo(
    () =>
      props.fields.reduce((prev, curr) => {
        if (curr.type === 'double') {
          prev[curr.row[0].key] = curr.row[0].initialValue;
          prev[curr.row[1].key] = curr.row[1].initialValue;
        } else {
          prev[curr.key] = curr.initialValue;
        }
        return prev;
      }, {} as OptionalValue<T>),
    [],
  );

  useEffect(() => {
    props.setInitialValues(initialValues);
  }, []);
  return (
    <KeyboardAwareScrollView
      extraHeight={height + relativeY(12)}
      horizontal={false}
      directionalLockEnabled
      alwaysBounceHorizontal={false}
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}>
      <Formik
        validationSchema={validationSchema}
        onSubmit={values => {
          if (props.submitting) return;
          props.setFieldError && props.setFieldError({} as FieldError<T>);
          const updatedValues = {} as OptionalValue<T>;

          for (const k in values) {
            const key = k as keyof T;
            if (values[key] !== initialValues[key]) {
              const value = values[key];
              updatedValues[key] = (
                typeof value === 'string' ? value.trim() : value
              ) as T[keyof T];
            }
          }
          if (Object.keys(updatedValues).length === 0) {
            props.setSubmitting(false);
            inAppNotification({
              title: 'No values changed',
              type: 'error',
            });
            return;
          }
          props.setSubmitting(true);
          props.submitHandler(values, updatedValues);
        }}
        initialValues={initialValues}>
        {formikProps => (
          <>
            {props.fields.map(field => {
              if (field.type === 'double')
                return (
                  <RowLayout
                    key={
                      (field.row[0].key as string) +
                      (field.row[1].key as string)
                    }
                    spaceBetween
                    width={93}>
                    {field.row.map(col => (
                      <View
                        key={col.key as string}
                        style={{ width: relativeX(45) }}>
                        {col.type === 'custom' ? (
                          <BaseInput
                            inputWidth={width}
                            titleText={col.title}
                            footerText={
                              (formikProps.errors[col.key] as string) ||
                              (props.fieldError
                                ? (props.fieldError[col.key] as string)
                                : undefined)
                            }
                            style={[styles.baseInput, col.style]}
                            CustomInputComponent={col.component(
                              formikProps.handleChange,
                            )}
                          />
                        ) : (
                          <BaseInput
                            titleText={col.title}
                            value={formikProps.values[col.key] as string}
                            onChangeText={formikProps.handleChange(col.key)}
                            inputWidth={45}
                            textInputStyle={[
                              styles.textInputStyle,
                              col.textInputStyle,
                            ]}
                            style={[styles.baseInput, col.style]}
                            placeholder={col.placeholder}
                            secureTextEntry={col.secureTextEntry}
                            keyboardType={col.keyboardType}
                            multiline={col.multiline}
                            footerText={
                              (formikProps.errors[col.key] as string) ||
                              (props.fieldError
                                ? (props.fieldError[col.key] as string)
                                : undefined)
                            }
                          />
                        )}
                      </View>
                    ))}
                  </RowLayout>
                );
              if (field.type === 'custom')
                return (
                  <BaseInput
                    key={field.key as string}
                    inputWidth={width}
                    titleText={field.title}
                    footerText={
                      (formikProps.errors[field.key] as string) ||
                      (props.fieldError
                        ? (props.fieldError[field.key] as string)
                        : undefined)
                    }
                    style={[styles.baseInput, field.style]}
                    CustomInputComponent={field.component(
                      formikProps.handleChange,
                    )}
                  />
                );
              return (
                <BaseInput
                  key={field.key as string}
                  titleText={field.title}
                  value={formikProps.values[field.key] as string}
                  onChangeText={formikProps.handleChange(field.key)}
                  inputWidth={width}
                  textInputStyle={[styles.textInputStyle, field.textInputStyle]}
                  style={[styles.baseInput, field.style]}
                  placeholder={field.placeholder}
                  secureTextEntry={field.secureTextEntry}
                  keyboardType={field.keyboardType}
                  multiline={field.multiline}
                  footerText={
                    (formikProps.errors[field.key] as string) ||
                    (props.fieldError
                      ? (props.fieldError[field.key] as string)
                      : undefined)
                  }
                />
              );
            })}
            {props.SubmitButton ? (
              <props.SubmitButton handleSubmit={formikProps.handleSubmit} />
            ) : props.submitButtonText ? (
              <PrimaryButton
                buttonSize="auto"
                backgroundColor={
                  props.submitting
                    ? theme.typeface.tertiary
                    : props.submitButtonColor
                }
                style={styles.uploadBtn}
                onPress={formikProps.handleSubmit}>
                {props.submitButtonText}
              </PrimaryButton>
            ) : undefined}
          </>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    paddingBottom: relativeY(2.3),
    paddingTop: relativeY(2.3),
  },
  baseInput: {
    marginBottom: relativeY(3),
  },
  scrollView: {
    paddingVertical: relativeY(3),
    overflow: 'visible',
    alignItems: 'center',
  },

  uploadBtn: { alignSelf: 'center', width: relativeX(95) },
});
