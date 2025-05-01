const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};


const getUserSystemDetails = async () => {
    const response = await fetch("https://ipapi.co/json/");
    return await response.json();
};

const getUserLocale = () => {
    const language = navigator.language || navigator.language || "en";
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    return {language, locale};
};

function getUserCurrency() {
    try {
        const locale = navigator.language || 'en-US';

        const formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            currencyDisplay: 'symbol',
            currency: 'USD',
        });

        // Example: USD, EUR, etc.
        return formatter.resolvedOptions().currency || 'USD';
    } catch (error) {
        console.error('Error fetching currency:', error);
        return 'USD'; // Fallback to USD if error occurs
    }
}

function getUserCountry() {
    try {
        const locale = Intl.DateTimeFormat().resolvedOptions().locale;
        return locale.split('-')[1] || 'US';
    } catch (error) {
        console.error('Error determining country:', error);
        return 'US';
    }
}

function getUserDetails() {
    try {
        return {
            language: getUserLocale().language,
            currency: getUserCurrency(),
            locale: getUserLocale().locale,
            country: getUserCountry(),
        };
    } catch (error) {
        console.error('Error fetching user details:', error);
        return {
            language: 'en-US',
            currency: 'USD',
            locale: 'en-US',
            country: 'US',
        };
    }
}


export const HELPERS = {getSystemTheme, getUserSystemDetails, getUserLocale, getUserDetails};