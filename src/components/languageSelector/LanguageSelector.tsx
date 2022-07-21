import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Lang {
  nativeName: string;
}

interface Lngs {
  en: Lang;
  es: Lang;
}

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const lngs: Lngs = {
    en: { nativeName: "English" },
    es: { nativeName: "Spanish" },
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="language-selector-select">
          {t("general.language")}
        </InputLabel>
        <Select
          labelId="language-selector-select"
          fullWidth
          size="small"
          name="language"
          label="Language"
          value={i18n.resolvedLanguage}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.keys(lngs).map((lng) => (
            <MenuItem key={lng} value={lng}>
              {t(`general.${lng}`)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
