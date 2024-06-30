import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IoIosArrowDropdown } from "react-icons/io";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "You can vote.",
      firstAnswer:
        "If you’re unhappy with the elected officials representing the place where you live, on a local level or nationally, not being able vote can make you feel helpless.",
      secondAnswer:
        "As a citizen, you get to have a say in who represents you in the government. You can also vote on other political measures. If you want your voice to be heard, citizenship is the way to make it happen.",
    },
    {
      id: 2,
      question:
        "You don’t have to worry when you travel to other countries. You can be away for as long as you want to",
      firstAnswer:
        "If you have a green card, there are limits to how much time you can spend outside the United States without losing your residency status.",
      secondAnswer:
        "If you spend more than six months traveling, your green card could be considered “abandoned” and you could be questioned by CBP upon returning to the United States. There are all sorts of situations in which you may find yourself needing to spend an extended amount of time outside of the United States. What if your parents are still living in your country of origin and one of them falls ill and needs you to come and nurse them back to health? It’s easier when you’re a citizen. When you become a citizen, your travel is no longer restricted.",
    },
    {
      id: 3,
      question:
        "You will be able to sponsor your parents, siblings, and/or spouse for a green card",
      firstAnswer:
        "Becoming a citizen doesn’t just help you. It also helps your loved ones.",
      secondAnswer:
        "Citizens have the ability to petition for their immediate family members to become U.S. lawful permanent residents. This gives your spouse the ability to legally immigrate to the United States much more quickly than if you just had a green card, and for some family members like parents or siblings, you can’t petition for them at all with only your green card.",
    },
  ];
  return (
    <div className="w-full container mx-auto text-black">
      {faqs?.length &&
        faqs?.map(({ id, question, firstAnswer, secondAnswer }) => (
          <Disclosure
            key={id}
            as="div"
            className="p-6 flex flex-col justify-between items-center"
            defaultOpen={id === 1}
          >
            <DisclosureButton className="group text-start flex w-full items-center justify-between hover:text-[#204498]">
              <span className="w-11/12 text-3xl font-bold text-[#676767] group-data-[hover]:text-[#204498] group-data-[open]:text-[#204498]">
                {id}. {question}
              </span>
              <IoIosArrowDropdown className="w-1/12 text-3xl fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-6 text-black text-xl text-start space-y-4">
              <p className="font-semibold">{firstAnswer}</p>
              <p className="text-base text-[#676767]">{secondAnswer}</p>
            </DisclosurePanel>
          </Disclosure>
        ))}
    </div>
  );
};

export default Faq;
