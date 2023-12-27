import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Terms of Supplies</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: '85%' }}>
          <h2 id="child-modal-title">Terms of using HashevTeshivem.com</h2>
          <ol id="child-modal-description">
          <li>The Website is designed to provide a platform for individuals seeking connections and support in the realm of loss and reality management. It serves as a facilitator for matching individuals with similar experiences and providing a platform for contact.</li>
             <li>
                 By using the Website, you acknowledge and agree that:
                 <ul>
                     <li>
                         The Website is a platform for connecting users, and we do not verify the identity of individuals using the service.
                     </li>
                     <li>
                         You are solely responsible for your interactions with other users.
                     </li>
                     <li>
                         The Website does not take any responsibility for the accuracy, completeness, or authenticity of user-provided information.
                     </li>
                 </ul>
             </li>
             <li>
                 The creator of the Website and its affiliates shall not be held responsible for any claims, damages, losses, or liabilities that may arise from the use of the Website, including but not limited to:
                 <ul>
                     <li>
                         Personal injury or emotional distress resulting from interactions with other users.
                     </li>
                     <li>
                         Inaccuracies or misinformation provided by users.
                     </li>
                     <li>
                         Unauthorized access to your information.
                     </li>
                 </ul>
             </li>
             <li>
                 The Website does not endorse, guarantee, or verify the accuracy of the information provided by users. We do not endorse any specific individuals, organizations, products, or services mentioned on the platform.
             </li>
             <li>
                 The creator of the Website reserves the right to modify, suspend, or terminate the Website or any part of its services at any time without prior notice.
             </li>
          </ol>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Terms of Supplies</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">
                Disclaimer and Terms of Use for HashevTeshivem.com
            </h2>
            <p id="parent-modal-description">
                Welcome to HashevTeshivem.com ("the Website"). Please carefully read and understand the following Disclaimer and Terms of Use before using our services. By accessing and using the Website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
            </p>
            <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}


//     <>
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//               Disclaimer and Terms of Use for HashevTeshivem.com
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//           <p>
//         
//         </p>
//         <ol>
//             <li>The Website is designed to provide a platform for individuals seeking connections and support in the realm of loss and reality management. It serves as a facilitator for matching individuals with similar experiences and providing a platform for contact.</li>
//             <li>
//                 By using the Website, you acknowledge and agree that:
//                 <ul>
//                     <li>
//                         The Website is a platform for connecting users, and we do not verify the identity of individuals using the service.
//                     </li>
//                     <li>
//                         You are solely responsible for your interactions with other users.
//                     </li>
//                     <li>
//                         The Website does not take any responsibility for the accuracy, completeness, or authenticity of user-provided information.
//                     </li>
//                 </ul>
//             </li>
//             <li>
//                 The creator of the Website and its affiliates shall not be held responsible for any claims, damages, losses, or liabilities that may arise from the use of the Website, including but not limited to:
//                 <ul>
//                     <li>
//                         Personal injury or emotional distress resulting from interactions with other users.
//                     </li>
//                     <li>
//                         Inaccuracies or misinformation provided by users.
//                     </li>
//                     <li>
//                         Unauthorized access to your information.
//                     </li>
//                 </ul>
//             </li>
//             <li>
//                 The Website does not endorse, guarantee, or verify the accuracy of the information provided by users. We do not endorse any specific individuals, organizations, products, or services mentioned on the platform.
//             </li>
//             <li>
//                 The creator of the Website reserves the right to modify, suspend, or terminate the Website or any part of its services at any time without prior notice.
//             </li>
//         </ol>
//           </Typography>
//         </Box>
//       </Modal>
//     </div>

    
        
//         <h4>
            
//         </h4>
        
//         </>
//   )
// };