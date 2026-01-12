"use client";

import { Button, Input, Textarea } from "@heroui/react";
import React, { useEffect, useMemo, useState } from "react";
import Dots from "../Dots";

const formatPhone = (digits) => {
  const clean = digits.slice(0, 10);
  if (!clean.length) return "+7";
  let out = "+7 (" + clean.slice(0, 3);
  if (clean.length < 3) return out;
  out += ")";
  if (clean.length > 3) {
    out += " " + clean.slice(3, 6);
  }
  if (clean.length > 6) {
    out += "-" + clean.slice(6, 8);
  }
  if (clean.length > 8) {
    out += "-" + clean.slice(8, 10);
  }
  return out;
};

const normalizePhone = (value) => {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("7") && digits.length > 10) {
    digits = digits.slice(1);
  }
  if (digits.startsWith("8") && digits.length > 10) {
    digits = digits.slice(1);
  }
  return digits.slice(0, 10);
};

const Contacts = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const phoneValue = useMemo(() => formatPhone(form.phone), [form.phone]);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handlePhoneChange = (event) => {
    const digits = normalizePhone(event.target.value);
    setForm((prev) => ({ ...prev, phone: digits }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Имя обязательно";
    if (!form.message.trim()) return "Сообщение обязательно";
    if (form.phone.length !== 10) return "Номер телефона обязателен";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Электронная почта недействительна";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setError("");
    setStatus("loading");

    const payload = {
      name: form.name,
      company: form.company,
      phone: `+7${form.phone}`,
      email: form.email,
      message: form.message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Запрос не удался");
      }

      setStatus("success");
      setForm({ name: "", company: "", phone: "", email: "", message: "" });
    } catch (err) {
      setError("Сервер не доступен, попробуйте позже");
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => {
      setStatus("idle");
    }, 5000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <div className="container">
      <div className="sectionTitle">
        <Dots />
        <h3>Контакты</h3>
      </div>
      <form className="contactsContainer" onSubmit={handleSubmit}>
        <div className="userInputs">
          <div className="textArea">
            <Textarea
              placeholder="Опишите свой проект"
              value={form.message}
              onChange={handleChange("message")}
              maxRows={15}
              classNames={{
                base: "contactTextarea",
                inputWrapper: "contactTextareaWrapper",
                input: "contactTextareaInner",
              }}
            />
          </div>
          <div className="userData">
            <Input
              label="Имя*"
              type="text"
              value={form.name}
              onChange={handleChange("name")}
              classNames={{
                base: "contactInput",
                inputWrapper: "contactInputWrapper",
                input: "contactInputInner",
              }}
            />
            <Input
              label="Компания*"
              type="text"
              value={form.company}
              onChange={handleChange("company")}
              classNames={{
                base: "contactInput",
                inputWrapper: "contactInputWrapper",
                input: "contactInputInner",
              }}
            />
            <Input
              label="Номер телефона*"
              type="tel"
              inputMode="numeric"
              value={phoneValue}
              onChange={handlePhoneChange}
              classNames={{
                base: "contactInput",
                inputWrapper: "contactInputWrapper",
                input: "contactInputInner",
              }}
            />
            <Input
              label="Эл.почта"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              classNames={{
                base: "contactInput",
                inputWrapper: "contactInputWrapper",
                input: "contactInputInner",
              }}
            />
          </div>
        </div>
        <div className="contactActions">
          <Button className="submitBtn" type="submit" isDisabled={status === "loading"}>
            {status === "loading" ? "Отправка..." : "Отправить"}
          </Button>
          {status === "error" && <span className="contactError">{error}</span>}
        </div>
      </form>
      <div className={`contactToast ${status === "success" ? "is-visible" : ""}`}>
        <div className="contactToastGlow" />
        <div className="contactToastContent">
          <span className="contactToastTitle">Спасибо!</span>
          <p>Скоро мы с вами свяжемся.</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
