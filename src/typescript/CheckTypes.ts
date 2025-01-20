// interface Techno {
export type TechnoType = {
  techno: {
    name: string;
    category: string;
    description: string;
  };
};

// interface AddTechnosProps {
export type AddTechnosProps = {
  handleAddTechno: (techno: TechnoType) => void;
};
