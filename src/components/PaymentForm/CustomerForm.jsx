import { useRef, useCallback, useState } from 'react';
import {
    Button,
    Checkbox,
    FormField,
    Layout,
    TextField
} from 'mdc-react';

const CustomerForm = ({ customer = {}, onSubmit }) => {
    const formRef = useRef();

    const [data, setData] = useState(customer);

    const handleBlur = useCallback(event => {
        const { name, value } = event.target;

        setData(data => ({ ...data, [name]: value }));
    }, []);

    const handleChange = useCallback((event, confirmed) => {
        setData(data => ({ ...data, confirmed }));
    }, []);

    const handleSubmit = useCallback(event => {
        event.persist();
        event.preventDefault();

        if (event.target.reportValidity()) {
            onSubmit(data);
        }
    }, [data]);

    return (
        <form ref={formRef} id="customer-form" onSubmit={handleSubmit}>
            <Layout column>
                <TextField
                    label="Имя"
                    name="firstname"
                    defaultValue={data.firstname}
                    filled
                    required
                    onBlur={handleBlur}
                />

                <TextField
                    label="Фамилия"
                    name="lastname"
                    defaultValue={data.lastname}
                    filled
                    required
                    onBlur={handleBlur}
                />

                <TextField
                    type="email"
                    label="E-mail"
                    name="email"
                    defaultValue={data.email}
                    filled
                    required
                    onBlur={handleBlur}
                />

                <FormField label="Я согласен/на на обработку персональных данных">
                    <Checkbox
                        name="confirmed"
                        checked={data.confirmed}
                        required
                        onChange={handleChange}
                    />
                </FormField>
            </Layout>

            <Button type="submit" disabled={!data.confirmed} outlined>Далее</Button>
        </form>
    );
};

CustomerForm.defaultProps = {
    customer: {
        firstname: '',
        lastname: '',
        email: '',
        confirmed: false
    }
};

export default CustomerForm;