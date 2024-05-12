export const noSpecialChar = /^[a-zA-Z]+[a-zA-Z0-9_.-]*$/;
export const nameChars = /^[a-zA-Z]+$/;
export const lettersAndNumbers = /^[a-zA-Z0-9]+$/;
export const lettersAndNumbersAndSpace = /^[a-zA-Z0-9\s]+$/;
export const nameCharsAndSpace = /^[a-zA-Z\s]+$/;
export const emailOrUsername = /^[a-zA-Z]+[a-zA-Z0-9_.-@]*$/;
export const emailOrUsernameOrPhone = /^[a-zA-Z0-9_.-@]*$/;
export const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-._!"`'#%&,:;<>=@{}~$()*+/\\?[\]^|])[A-Za-z\d-._!"`'#%&,:;<>=@{}~$()*+/\\?[\]^|]{8,}$/;
