import { clearToken } from "@/store/slices/cartSlice";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

  //   function close() {
  //     setIsOpen(false);
  //   }

  const logoutBtn = () => {
    dispatch(clearToken());
    setIsOpen(false);
    // router.push("/auth/register");
  };

  return (
    <div>
      <Dialog open={isOpen} as="div" onClose={close}>
        <div className="absolute pt-[15%] inset-0 z-50 w-full bg-white/5 backdrop-blur-2xl data-closed:transform-[scale(95%)] data-closed:opacity-0">
          <div className="flex items-center justify-center p-4 bg-gray-500 w-2/5 mx-auto">
            <DialogPanel
              transition
              className="w-full rounded-xl p-4 duration-300 ease-out"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer duration-300 ease-in"
                  onClick={logoutBtn}
                >
                  Chiqish
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
