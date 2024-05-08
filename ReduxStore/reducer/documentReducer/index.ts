import { docPathType } from '@/Components/Footers/data-footer';
import { Nullable } from '@/Components/Inputs/Select/Type';

export type documentStateType = {
  pdfFile: Nullable<docPathType>;
  opened: boolean;
};

const initialDocumentState: documentStateType = {
  pdfFile: null,
  opened: false,
};

export { initialDocumentState };
