interface Device {
  _id: string;
  deviceId: string;
  deviceOS: DeviceOS;
  lastActive: number;
  // currentUser?: UnpopulatedUser;
  currentUser?: string;
  fcmToken?: string;
  country?: Country;
  createdAt: number;
  updatedAt: number;
}

interface UnpopulatedDevice extends Device {
  currentUser?: string;
}
