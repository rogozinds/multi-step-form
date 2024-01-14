import Image from 'next/image'
import styles from './thankyou.module.css';

export const ThankYouPage = () => {
    return (
        <div className={styles.container}>
            <Image
                style={{marginBottom:"24px"}}
                src="images/icon-thank-you.svg"
                alt="Thank You"
                width={40}
                height={40}
                priority>
            </Image>
            <div className="content-header">Thank you</div>
            <div className="content-subheader">
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
            </div>
        </div>
    );
};