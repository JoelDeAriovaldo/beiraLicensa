export type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
};

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

export type MainStackParamList = {
    Home: undefined;
    VehicleList: undefined;
    VehicleDetails: { id: string };
    PaymentMethods: { vehicleId: string };
    LicenseHistory: undefined;
    Profile: undefined;
    VehicleForm: undefined;
};
