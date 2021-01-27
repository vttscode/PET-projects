import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import AuthenticatedPageLayout from '../../components/AuthenticatedPageLayout/AuthenticatedPageLayout';
import Columns from '../../components/Columns';
import TenorModal from '../../components/TenorModal';

export default function Board({ columns, title, boardCreated, fetchBoard, match }) {
  useEffect(() => {
    if (boardCreated === false) {
      fetchBoard({ id: match.params.id });
    }
  }, [fetchBoard, boardCreated, match]);

  return (
    <>
      <AuthenticatedPageLayout>
        <div>
          <Typography variant="h3" align="center" color="textPrimary">
            {title}
          </Typography>
        </div>
        <Columns columns={columns} />
        <TenorModal />
      </AuthenticatedPageLayout>
    </>
  );
}
