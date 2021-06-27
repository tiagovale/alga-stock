import React from 'react'
import { useState } from 'react'
import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}
function teste(form: any){
    console.log(form);

}
const ProductsForm = () => {
    const [form, setForm] = useState(initialFormState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setForm({
            ...form,
            [name]: value
        })
    }


    return <Form onSubmit={() => {teste(form)}}>
        <Input
            onChange={handleInputChange}
            label="Name"
            name="name"
            placeholder="E.g.: Cookie"
            required
        />
        <Input 
            onChange={handleInputChange}
            label="Price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            placeholder="E.g.: 1.25"
            required
        />
        <Input 
            onChange={handleInputChange}
            label="Stock"
            name="stock"
            type="number"
            min="0"
            placeholder="E.g.: 15"
            required
        />
        <Button>
            Submit
        </Button>
    </Form>
}

export default ProductsForm