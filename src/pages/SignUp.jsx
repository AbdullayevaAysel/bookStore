import { Button, Card, CircularProgress, Fade } from "@mui/material"
import { Field, Form, Formik } from "formik"
import { useRef, useState } from "react"
import { SignupSchema } from "../validation/SignupSchema"
import { useNavigate } from "react-router-dom"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import WarningIcon from "@mui/icons-material/Warning"

const SignUp = () => {
  const [showInput, setShowInput] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const inputRef = useRef()
  const requiredRef = useRef()

  const navigate = useNavigate()

  const handleType = () => {
    inputRef.current.type =
      inputRef.current.type === "password" ? "text" : "password"
    setShowInput(!showInput)
  }

  const handleInput = (event) => {
    event.target.value.trim() !== ""
      ? requiredRef.current.classList.add("hidden")
      : requiredRef.current.classList.remove("hidden")
  }

  const submitRealRequest = async (values, { setSubmitting }) => {
    const url =
      "https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/authentication/versions/1/tickets"
    setLoading(true)

    try {
      if (
        values.userId.toLowerCase() == "react" &&
        values.password == "123456"
      ) {
        const headers = new Headers()
        headers.set(
          "Authorization",
          "Basic " + btoa(values.userId + ":" + values.password)
        )

        const response = await fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(values),
        })

        console.log(JSON.stringify(values))
        const data = await response.json()

        if (response.ok) {
          console.log("Request was successful:", data)
          localStorage.setItem("token", data.entry.id)
          navigate("/personal-files")
        } else {
          console.error("Request failed:", data)
        }
      }
      setLoading(false)
    } catch {
      setLoading(false)
      setError("You`ve entered an unknown username or password")
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-[url('/images/Wallpaper-BG-generic.svg')] bg-no-repeat bg-cover bg-center w-full h-screen grid place-content-center">
      <div className="w-[45rem] min-w-[32rem] shadow-[0_2px_2px_#0000003d,_0_0_2px_#0000001f] ">
        <Card className="!shadow-none pt-[2.1rem] px-[6.4rem] pb-[3.4rem]">
          <div className=" px-[2.4rem] py-[1.6rem]">
            <img
              className="max-h-[5.8rem] mx-auto"
              src="/images/alfresco-logo.svg"
              alt="logo"
            />
          </div>

          <Formik
            initialValues={{ userId: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={submitRealRequest}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="flex flex-col gap-[1.8rem]">
                <div className="text-[#b8082a] flex items-center justify-center gap-[1rem]">
                  {error !== "" && (
                    <>
                      <WarningIcon className="text-[1.7rem]" />
                      <span className="text-[1.2rem]">{error}</span>
                    </>
                  )}
                </div>
                <div className="my-[1.6rem]">
                  <Field
                    name="userId"
                    placeholder="Username"
                    className={`w-full text-[1.6rem] outline-none leading-[2rem] border-b focus:border-b-[0.3rem] py-[0.6rem]  transition ease-linear delay-100 ${
                      errors.userId && touched.userId
                        ? "border-[#b8082a] focus:caret-[#b8082a]"
                        : "focus:border-[#0055b8] focus:caret-[#0055b8] border-[#000000]"
                    } `}
                  />

                  <div className="pt-[0.6rem] text-[1.2rem]">
                    {errors.userId && touched.userId ? (
                      <span className=" text-[#b8082a]">{errors.userId}</span>
                    ) : null}
                  </div>
                </div>

                <div className="my-[1.6rem]">
                  <div className="w-full relative">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      innerRef={inputRef}
                      onInput={() => handleInput(event)}
                      className={`w-full text-[1.6rem] outline-none leading-[2rem] border-b focus:border-b-[0.3rem] py-[0.6rem]  transition ease-linear delay-100 ${
                        errors.password && touched.password
                          ? "border-[#b8082a] focus:caret-[#b8082a]"
                          : "focus:border-[#0055b8] focus:caret-[#0055b8] border-[#000000]"
                      } `}
                    />
                    <span
                      ref={requiredRef}
                      className={`${
                        errors.password && touched.password
                          ? "text-[#b8082a]"
                          : "text-[#000000]"
                      } text-[1.6rem] absolute left-[7rem] top-[50%] translate-y-[-50%]`}
                    >
                      *
                    </span>
                    {showInput ? (
                      <RemoveRedEyeIcon
                        onClick={() => handleType()}
                        className="absolute top-[50%] translate-y-[-50%] right-0 cursor-pointer !text-[1.6rem]"
                      />
                    ) : (
                      <VisibilityOffIcon
                        onClick={() => handleType()}
                        className="absolute top-[50%] translate-y-[-50%] right-0 cursor-pointer !text-[1.6rem]"
                      />
                    )}
                  </div>
                  {errors.password && touched.password ? (
                    <div className="pt-[0.6rem] text-[1.2rem] text-[#b8082a]">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  className="!bg-[#00754a] cursor-pointer !text-[1.4rem] !font-[500] h-[3.6rem] leading-[3.8rem] disabled:!bg-[#0000001f] disabled:!text-[#fff]"
                >
                  {loading ? (
                    <>
                      CHECKING
                      <Fade
                        in={loading}
                        style={{
                          transitionDelay: loading ? "800ms" : "0ms",
                        }}
                        unmountOnExit
                      >
                        <CircularProgress className="!w-[2rem] !h-[2rem] ml-[1rem]" />
                      </Fade>
                    </>
                  ) : (
                    "SIGN IN"
                  )}
                </Button>
                <br />
              </Form>
            )}
          </Formik>
        </Card>
      </div>
      <p className="text-[1.2rem] py-[1.6rem] opacity-[0.54] text-center">
        &copy; 2017 - 2020 Alfresco Software, Inc. All rights reserved.{" "}
      </p>
    </div>
  )
}

export default SignUp
