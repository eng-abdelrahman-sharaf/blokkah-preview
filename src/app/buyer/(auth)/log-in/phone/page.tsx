import SkipSection from "../components/skipSection";
import AuthCardHeader from "../../components/authCardHeader";
import AuthPhoneInput from "../../components/authPhoneInput";

export default function Page() { 
    return (
        <>
            <AuthCardHeader ContainsArrow={true} href="./chooseMethod" title="Sign in to Your Account" subtitle="Welcome back! Please enter your phone number."/>
                <AuthPhoneInput/>
            <SkipSection pageType="log in" skipHref="/" answerHref="/buyer/log-in/method"/>
        </>           
    )
}