import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  AddedMedicine,
  AddInstructions,
  AddMedicineManually,
  AddMedicineStrength,
  AddPrescription,
  AskHourInterval,
  AskTimeInterval,
  CameraScanner,
  CreateAccount,
  DoctorAppointments,
  EnterOtp,
  EveryXdaysDose,
  EveryXdaysDoseDetails,
  EveryXhoursDose,
  EveryXmonthsDose,
  EveryXmonthsDoseDetails,
  EveryXweeksDose,
  EveryXweeksDoseDetails,
  ForgotPassword,
  FourTimesAdayDose,
  Login,
  MedicineAddingMethod,
  MedicineDailyDoses,
  MedicineDetails,
  MedicineDoses,
  MedicineReminders,
  MedicineType,
  MonthlyDose,
  MonthlyDoseDetails,
  OnceAdayDose,
  PasswordChanged,
  ResetPassword,
  ScanQrCode,
  SetTreatmentDuration,
  ThreeTimesAdayDose,
  TwiceAdayDose,
  WeeklyDose,
  WeeklyDoseDetails,
  XtimesAdayDose
} from '../Screens';
import { colors } from '../theme/colors';

const publicStack = createStackNavigator();

const PublickStackNavigator: any = () => {
  return (
    <publicStack.Navigator>
      <publicStack.Screen
        name={'ScanQrCodeScreen'}
        component={ScanQrCode}
        options={{ headerShown: false }}
      />
      <publicStack.Screen
        name={'CameraScanner'}
        component={CameraScanner}
        options={{ headerShown: false }}
      />
      <publicStack.Screen
        name={'MedicineDetails'}
        component={MedicineDetails}
        options={{ headerShown: false }}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerTintColor: colors.buttonBg
        }}
        name={'Login'}
        component={Login}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MedicineDoses'}
        component={MedicineDoses}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MedicineDailyDoses'}
        component={MedicineDailyDoses}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'CreateAccount'}
        component={CreateAccount}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'ForgotPassword'}
        component={ForgotPassword}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EnterOtp'}
        component={EnterOtp}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'ResetPassword'}
        component={ResetPassword}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'PasswordChanged'}
        component={PasswordChanged}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'OnceAdayDose'}
        component={OnceAdayDose}
      />
      <publicStack.Screen
        options={{ headerShown: false, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddedMedicine'}
        component={AddedMedicine}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MedicineAddingMethod'}
        component={MedicineAddingMethod}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddMedicineManually'}
        component={AddMedicineManually}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddMedicineStrength'}
        component={AddMedicineStrength}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MedicineType'}
        component={MedicineType}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerTintColor: colors.buttonBg
        }}
        name={'AddInstructions'}
        component={AddInstructions}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'SetTreatmentDuration'}
        component={SetTreatmentDuration}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MedicineReminders'}
        component={MedicineReminders}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'DoctorAppointments'}
        component={DoctorAppointments}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddPrescription'}
        component={AddPrescription}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'TwiceAdayDose'}
        component={TwiceAdayDose}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'ThreeTimesAdayDose'}
        component={ThreeTimesAdayDose}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'FourTimesAdayDose'}
        component={FourTimesAdayDose}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AskTimeInterval'}
        component={AskTimeInterval}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'XtimesAdayDose'}
        component={XtimesAdayDose}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AskHourInterval'}
        component={AskHourInterval}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXhoursDose'}
        component={EveryXhoursDose}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'WeeklyDose'}
        component={WeeklyDose}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'WeeklyDoseDetails'}
        component={WeeklyDoseDetails}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MonthlyDose'}
        component={MonthlyDose}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MonthlyDoseDetails'}
        component={MonthlyDoseDetails}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXdaysDose'}
        component={EveryXdaysDose}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXdaysDoseDetails'}
        component={EveryXdaysDoseDetails}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXweeksDose'}
        component={EveryXweeksDose}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXweeksDoseDetails'}
        component={EveryXweeksDoseDetails}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXmonthsDose'}
        component={EveryXmonthsDose}
      />
      <publicStack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXmonthsDoseDetails'}
        component={EveryXmonthsDoseDetails}
      />
    </publicStack.Navigator>
  );
};

export default PublickStackNavigator;
