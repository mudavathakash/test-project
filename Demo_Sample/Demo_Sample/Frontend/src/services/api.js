export const sendWorkflowRequest = async (type, data) => {
  return fetch('http://localhost:8080/api/workflow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, data }),
  });
};
