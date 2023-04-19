/* eslint-disable no-alert */
import { useAddTaskEntry } from '../utilities/usePost';
// eslint-disable-next-line import/order
import MslForm from './MslForm';

const fields = ['Title', 'dueDate', 'Description', 'Significant', 'Completed'];
const requiredField = ['Title', 'Description'];

export default function AddTask() {
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
    <MslForm
      items={fields}
      className='tw-h-6 tw-border-2 tw-text-black'
      requireItems={requiredField}
      fn={taskCreateSubmit}
    />
  );
}
