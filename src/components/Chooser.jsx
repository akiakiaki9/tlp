import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Chooser() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(localStorage.getItem("language") || null);

    const flags = {
        en: "/images/flags/britain.webp",
        ru: "/images/flags/russian.png",
        uz: "/images/flags/uzbekistan.png",
    };

    useEffect(() => {
        if (!selectedLang) {
            setIsOpen(true);
            document.body.style.overflow = "hidden"; // Блокируем прокрутку
        } else {
            document.body.style.overflow = ""; // Восстанавливаем прокрутку
        }

        return () => {
            document.body.style.overflow = ""; // Очистка при размонтировании
        };
    }, [selectedLang]);

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        setSelectedLang(lang);
        setIsOpen(false);
        document.body.style.overflow = ""; // Восстанавливаем прокрутку после закрытия
    };

    return (
        <>
            {isOpen && (
                <div className="choose-modal-overlay">
                    <div className="choose-modal">
                        <h2>Выберите язык</h2>
                        <div className="choose-language-options">
                            {Object.keys(flags).map((lang) => (
                                <div
                                    key={lang}
                                    className="choose-language-item"
                                    onClick={() => switchLanguage(lang)}
                                >
                                    <img src={flags[lang]} alt={lang} className="choose-flag" />
                                    <span>{lang.toUpperCase()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};