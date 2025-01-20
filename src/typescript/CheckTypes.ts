// interface Techno {
export type TechnoType = {
  techno: {
    name: string;
    category: string;
    description: string;
  };
};

export type AddTechnoType = {
  technoid: string;
  technoname: string;
  technocategory: string;
  technodescription: string;
};

// interface AddTechnosProps {
export type AddTechnosProps = {
  handleAddTechno: (techno: AddTechnoType) => void;
};
