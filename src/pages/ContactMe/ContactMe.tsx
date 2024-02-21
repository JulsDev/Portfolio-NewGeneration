import PageTitle from '../../components/Common/PageTitle';
import FormControl from '../../components/form/FormControl';
import './ContactMe.scss';

const ContactMe = () => {
  return (
    <section className='section-contactme' id='contactme'>
      <div className='container'>
        <PageTitle title='Contacts with me' />
        <FormControl />
      </div>
    </section>
  )
};

export default ContactMe;