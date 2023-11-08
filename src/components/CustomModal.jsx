import { Box, Button, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createFolder } from "../common/store/features/folderSlice";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 4,
};

const CustomModal = ({ setOpenModal, openModal, title }) => {
  const dispatch = useDispatch();
  const handleClose = () => setOpenModal(false);



  const handleSubmit = (values) => {
    dispatch(
      createFolder({
        name: values?.name,
        title: values?.title,
        description: values?.description,
        parentFolderId: "382b3102-ffba-422e-8711-d7f330fb5468",
      })
    );
    if ((values?.name && values.title && values.description) !==  null) {
      handleClose();
    }
  };

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-lg">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-[#838080] !font-[200] !text-[1.9rem]"
          >
            {title}
          </Typography>

          <Formik
            id="modal-modal-description"
            sx={{ mt: 2 }}
            onSubmit={handleSubmit}
            initialValues={{ name: "", title: "", description: "" }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="flex flex-col">
                <div className="my-[1.6rem]">
                  <Field
                    name="name"
                    placeholder="Name"
                    className={`w-full text-[1.6rem] outline-none leading-[2rem] border-b focus:border-b-[0.3rem] py-[0.6rem]  transition ease-linear delay-100 ${
                      errors.name && touched.name
                        ? "border-[#b8082a] focus:caret-[#b8082a]"
                        : "focus:border-[#0055b8] focus:caret-[#0055b8] border-[#000000]"
                    } `}
                  />
                </div>
                <div className="my-[1.6rem]">
                  <Field
                    name="title"
                    placeholder="Title"
                    className={`w-full text-[1.6rem] outline-none leading-[2rem] border-b focus:border-b-[0.3rem] py-[0.6rem]  transition ease-linear delay-100 ${
                      errors.title && touched.title
                        ? "border-[#b8082a] focus:caret-[#b8082a]"
                        : "focus:border-[#0055b8] focus:caret-[#0055b8] border-[#000000]"
                    } `}
                  />
                </div>

                <div className="my-[1.6rem]">
                  <Field
                    name="description"
                    placeholder="Description"
                    type="textarea"
                    component="textarea"
                    rows="4"
                    className={`w-full text-[1.6rem] resize-none outline-none leading-[2rem] border-b focus:border-b-[0.3rem] py-[0.6rem]  transition ease-linear delay-100 ${
                      errors.description && touched.description
                        ? "border-[#b8082a] focus:caret-[#b8082a]"
                        : "focus:border-[#0055b8] focus:caret-[#0055b8] border-[#000000]"
                    } `}
                  />
                </div>

                <div className="flex items-center justify-end gap-3">
                  <Button
                    type="submit"
                    variant="text"
                    onClick={handleClose}
                    className="cursor-pointer !text-[1.4rem] !font-[300] h-[3.6rem] leading-[3.8rem] transition-all !text-[#838080] !hover:bg-[#F5F5F5]
                     "
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="text"
                    disabled={isSubmitting}
                    className="cursor-pointer !text-[1.4rem] !font-[300] h-[3.6rem] !text-[#838080] transition-all leading-[3.8rem] disabled:!bg-[#0000001f] disabled:!text-[#fff]"
                  >
                    CREATE
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
