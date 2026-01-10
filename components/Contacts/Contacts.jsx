import { Button, Input, Textarea } from '@heroui/react'
import React from 'react'
import Dots from "../Dots";

const Contacts = () => {
  return (
    <div className="container">
      <div className="sectionTitle">
        <Dots />
        <h3>Контакты</h3>
      </div>
      <div className='contactsContainer'>
        <div className='textArea'>
          <Textarea
            className='contact'
            placeholder='Опишите свой проект'
            classNames={{
              base: "contactTextarea",
              inputWrapper: "contactTextareaWrapper",
              input: "contactTextareaInner",
            }}
          />
        </div>
        <div className='userData'>
          <Input
            label="Имя*"
            type="text"
            classNames={{
              base: "contactInput",
              inputWrapper: "contactInputWrapper",
              input: "contactInputInner",
            }}
          />
          <Input
            label="Компания*"
            type="text"
            classNames={{
              base: "contactInput",
              inputWrapper: "contactInputWrapper",
              input: "contactInputInner",
            }} />
          <Input
            label="Номер телефона*"
            type="number"
            classNames={{
              base: "contactInput",
              inputWrapper: "contactInputWrapper",
              input: "contactInputInner",
            }} />
          <Input
            label="Эл.почта"
            type="email"
            classNames={{
              base: "contactInput",
              inputWrapper: "contactInputWrapper",
              input: "contactInputInner",
            }} />
        </div>
      </div>
      <Button className='submitBtn'>
        Отправить
      </Button>
    </div>
  )
}

export default Contacts