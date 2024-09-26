interface ICalendarModalProps {
  calendarModalVisible: boolean;
  setCalendarModalVisible: (visible: boolean) => void;
  setDate?: (date: string) => void;
  onClickAble?: (date: string) => void;
  setDateTime?: (date: string) => void;
}

export default ICalendarModalProps;
