import * as yup from "yup";

const validations = yup.object().shape({
    email: yup.string().email('Error mail format').required('Required'),
    password: yup.string().min(5, 'Min 5 character.').required('Required'),
    passwordConfirm: yup.string().OneOf([yup.ref('password')], 'Not the same').required('Required'),
});

export default validations;