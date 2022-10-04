import styles from './Contact.module.scss';

import Image from 'next/image';
import emailjs from 'emailjs-com';

import coding_pic from '../../assets/img/coding_pic.jpg';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bdebbv6',
        'template_7qk4pwu',
        e.target,
        '9g7jOu9k7DzoJdMe5'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.contact_with_me_container}>
      <h1>Contact with me</h1>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.top}>
            <Image src={coding_pic} alt='' placeholder='blur' />
          </div>
          <div className={styles.bottom}>
            <h4>Khudaiberdiev Akmal</h4>
            <a className='text-black dark:text-white' href='tel:+998908255014'>
              +998 90 825 50 14
            </a>
            <a
              className='text-black dark:text-white'
              href='mailto:gripers91@gmail.com'
            >
              gripers91@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <form onSubmit={sendEmail}>
            <input type='text' placeholder='Name' name='name' required={true} />
            <input
              type='email'
              placeholder='Email'
              name='email'
              required={true}
            />
            <textarea
              name='message'
              id='message'
              rows='6'
              placeholder='Message'
              required={true}
            ></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
