import { CubeIcon, SupportIcon, ReceiptRefundIcon, LockClosedIcon } from "@heroicons/react/outline"
import { Policy } from "../elements/policy"

export const PolicyList = () => {
  return (
    <>
      <Policy Icon={CubeIcon} title={"FREE SHIPPING"} desc={"Free shipping on all US order or order above $100"} />
      <Policy Icon={SupportIcon} title={"SUPPORT 24/7"} desc={"Contact us 24 hours a day, 7 days a week"} />
      <Policy Icon={ReceiptRefundIcon} title={"30 DAYS RETURN"} desc={"Simply return it within 30 days for an exchange."} />
      <Policy Icon={LockClosedIcon} title={"100% PAYMENT SECURE"} desc={"We ensure secure payment with PEV"} />
    </>
  );
}