import { useCallback, useMemo } from 'react';

import { docPathType } from '@/Components/Footers/data-footer';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { setOpenedDocument } from '@/ReduxStore/reducer/documentReducer/documentSlice';

const DocumentModel = () => {
  const dispatch = useAppDispatch();
  const documentState = useAppSelector(state => state.document);

  const openPdf = useCallback((pdfFile: docPathType) => {
    dispatch(setOpenedDocument({ pdfFile, opened: true }));
  }, []);

  const closePdf = useCallback(() => {
    dispatch(setOpenedDocument({ pdfFile: null, opened: false }));
  }, []);

  const result = useMemo(
    () => ({
      documentState,
      openPdf,
      closePdf,
    }),
    [documentState],
  );

  return { ...result };
};

export default DocumentModel;
