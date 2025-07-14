import { useState } from 'react';
import { sendWorkflowRequest } from '../services/api';

export default function WorkflowForm() {
  const [type, setType] = useState('leave');
  const [data, setData] = useState('');

  const handleSubmit = async () => {
    await sendWorkflowRequest(type, data);
    alert('Request Sent');
  };

  return (
    <div className="workflow-form">
      <h3>Trigger Workflow</h3>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="leave">Apply Leave</option>
        <option value="po">Create PO</option>
        <option value="inventory">Update Inventory</option>
      </select>
      <textarea value={data} onChange={e => setData(e.target.value)} placeholder="Details..." />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}
