import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const sendEmail = (formRef: HTMLFormElement, setIsSubmitting: (isSub: boolean) => void) => {
	emailjs
		.sendForm("service_kmkjhul", "template_bx2ffve", formRef, {
			publicKey: "Y2s6N82jhNULMBeEL",
		})
		.then(
			() => {
				console.log("SUCCESS!");
				toast.success("Email sent successfully !!!");
			},
			(error) => {
				console.log("FAILED...", error.text);
				toast.error("Email sending failed ");
			}
		)
		.finally(() => {
			setIsSubmitting(false);
		});
};
