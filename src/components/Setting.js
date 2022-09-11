import { useAppContext } from '../context/app-context';

export default function Setting() {
  const context = useAppContext();
  return (
    <input 
      type="text"
      onChange={(e) => {
        context.setUser({
          ...context.user,
          name: e.target.value,
        });
      }}
      placeholder="Enter your name"
      value={context.user.name ?? ''}
    />
  );
}