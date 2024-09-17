// import React, {FC} from 'react';
// import {StyleSheet, Text, View, Button} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// const initialState = {
//   packed: false,
// };
// const CheckboxComponent: FC = () => {
//   const [state, setState] = React.useState(initialState);
//   const [toggleButton, setToggleButton] = React.useState(false);
//   return (
//     <>
//       <View style={styles.checkboxWrapper}>
//         <CheckBox
//           value={state.packed}
//           onValueChange={value =>
//             setState({
//               ...state,
//               packed: value,
//             })
//           }
//           tintColors={{true: '#765492', false: '#4B4F61'}}
//         />
//         <Text style={styles.checkboxTitle}>Packed</Text>
//       </View>

//       {toggleButton && (
//         <View style={styles.resultContainer}>
//           {Object.entries(state).map(([key, value]) => {
//             return (
//               value && (
//                 <View key={key} style={{paddingHorizontal: 5}}>
//                   <Text>{key}</Text>
//                 </View>
//               )
//             );
//           })}
//         </View>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   textInput: {
//     borderColor: 'gray',
//     borderWidth: 1,
//   },
//   checkboxTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#4B4F61',
//   },
//   resultContainer: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checkboxWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 5,
//   },
// });

// export default CheckboxComponent;




import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface ICheckboxComponentProps {
  onChange: (checked: boolean) => void;
}

const CheckboxComponent: FC<ICheckboxComponentProps> = ({ onChange }) => {
  const [packed, setPacked] = React.useState(false);

  const handleValueChange = (value: boolean) => {
    setPacked(value);
    onChange(value); // Notify the parent component about the change
  };

  return (
    <View style={styles.checkboxWrapper}>
      <CheckBox
        value={packed}
        onValueChange={handleValueChange}
        tintColors={{ true: '#765492', false: '#4B4F61' }}
      />
      <Text style={styles.checkboxTitle}>Packed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B4F61',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
});

export default CheckboxComponent;
