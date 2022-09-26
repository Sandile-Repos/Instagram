import {Text, View, TextInput} from 'react-native';
import {Controller, Control} from 'react-hook-form';

import {User} from '../../API';
import colors from '../../theme/colors';
import styles from './styles';

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
export type IEditableUser = Pick<User, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserField; // or name: keyof IEditableUser;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value || ''}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              multiline={multiline}
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.border},
              ]}
              autoCapitalize="none"
            />
            {error && (
              <Text style={{color: colors.error}}>{error.message}</Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

export default CustomInput;
