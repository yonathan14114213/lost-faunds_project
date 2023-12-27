import Button from '@mui/material/Button';

export default function BasicButtons(text:string, func:()=>{}) {
  return (
      <Button variant="outlined" onClick={func}>{text}</Button>
  );
}
