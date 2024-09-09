interface IDoseInputModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (inputValue: string) => void;
  numKeybaordType: boolean;
}

export default IDoseInputModalProps;
