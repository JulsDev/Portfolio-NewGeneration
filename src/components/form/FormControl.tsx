import Button from '../Common/Button';
import './FormControl.scss';

const FormControl = () => {
  return (
      <Button
        id='form-submit__button'
        className='form-submit__button'
        type='submit'
        text='SEND'
      />
  )
};

export default FormControl;