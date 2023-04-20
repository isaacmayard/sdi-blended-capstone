/* eslint-disable no-alert */
import { useAddTaskEntry } from '../utilities/usePost';
// eslint-disable-next-line import/order
import MslForm from './MslForm';

const fields = ['Title', 'dueDate', 'Description', 'Significant', 'Completed'];
const requiredField = ['Title', 'Description'];

export default function AddTask({ setFormState }) {
  const { mutate } = useAddTaskEntry();
  const taskCreateSubmit = ({
    Title: title,
    Description: description,
    dueDate,
    Significant: significant,
    Completed: completed,
  }) => {
    // passing the input data into the custom hook for posting a new task
    mutate({ title, description, dueDate, completed, significant });
    alert('Task Created!');
  };

  return (
    <div className='tw-relative tw-bottom-[240px] tw-z-50 tw-w-fit'>
      <MslForm
        items={fields}
        className='tw-h-fit tw-border-2 tw-text-black'
        requireItems={requiredField}
        fn={taskCreateSubmit}
      >
        <button
          onClick={() => setFormState(false)}
          className='tw-m-2 tw-w-32 tw-self-center tw-rounded-sm tw-border-2'
          type='submit'
        >
          Close
        </button>
      </MslForm>
    </div>
  );
}
