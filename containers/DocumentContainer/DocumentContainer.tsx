import React, { useEffect } from 'react';

import { PdfContainer } from '@ca-actual-projects/sobankui';

import {
  footerCompanyInfo,
  footerOwnerData,
  ownerKeysType,
} from '@/Components/Footers/data-footer';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { currentDomain } from '@/GlobalConfig';
import DocumentModel from '@/models/DocumentModel/DocumentModel';

function DocumentContainer() {
  const { documentState, closePdf } = DocumentModel();

  const { viewport } = useAppSelector(state => state.config);

  const owner: ownerKeysType = (process.env.OWNER as ownerKeysType) || 'Samohina';
  const theme = process.env.THEME === 'masterbank' ? 'masterbank' : 'sobank';

  useEffect(() => {
    const header = document.querySelector('header')!;

    if (documentState.opened) {
      header.style.position = 'fixed';
      header.style.width = '100%';
      header.style.zIndex = '201';
      header.style.top = '0';
    } else header?.removeAttribute('style');
  }, [documentState.opened]);

  return (
    <PdfContainer
      theme={theme}
      origin={window.location.origin}
      closeHandler={closePdf}
      headerStyle={{ paddingTop: 0 }}
      containerStyle={{ paddingTop: viewport === 'mobile' ? 90 : 157 }}
      {...documentState}
      {...footerOwnerData[owner]}
      {...footerCompanyInfo[currentDomain]}
    />
  );
}

export default DocumentContainer;
