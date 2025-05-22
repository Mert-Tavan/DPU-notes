export default function (errorCode){
    switch (errorCode) {
        case "auth/invalid-email": 
            return "Geçersiz E-Posta Adresi"
        
        case "auth/email-already-in-use": 
            return "Bu E-Posta Adresi Kullanılıyor"

        case "auth/user-not-found": 
            return "Kullanıcı Bulunamadı"

        case "auth/invalid-login-credentials": 
            return "Kullanıcı Bulunamadı"

        case "auth/weak-password":
            return "Daha Güçlü Bir Şifre Seçin"

        case "auth/network-request-failed":
            return "Bağlantınızı Kontrol Edin"
        
        case "auth/missing-password":
            return "Tüm Alanları Doldurun"

        default:
            return errorCode;
    }
}