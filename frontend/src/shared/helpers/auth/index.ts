export const validatePasswordMatch = (
    password:  string,
    confirmPassword: string,
    errorState: React.Dispatch<React.SetStateAction<boolean>>,
    errorValidateMessage: React.Dispatch<React.SetStateAction<string>>
): boolean => {
    if (password === confirmPassword) {
        errorState(false);
        errorValidateMessage('');
        return true
    } else {
        errorState(true);
        errorValidateMessage('confirm field does not match password');
        return false
    }
}