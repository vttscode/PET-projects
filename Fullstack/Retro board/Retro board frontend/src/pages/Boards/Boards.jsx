import React, { useEffect } from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import AuthenticatedPageLayout from '../../components/AuthenticatedPageLayout/AuthenticatedPageLayout';
import BoardDetails from '../../components/BoardDetails';
import BoardListItem from '../../components/BoardListItem';
import CircularLoader from '../../components/CircularLoader';
import AddBoard from '../../components/AddBoard';

export default function Boards({
  boards,
  isLoading,
  fetchBoards,
  initiateBoardDetailsFetch,
  isBoardDetailsShowing,
}) {
  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  const handleClick = () => {
    initiateBoardDetailsFetch('boardID');
  };

  return (
    <AuthenticatedPageLayout>
      <div className="board-list">
        <Container maxWidth="md">
          <Typography variant="h3" aling="center" color="textPrimary">
            Boards list
          </Typography>

          {isLoading ? (
            <CircularLoader />
          ) : (
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <AddBoard />
              </Grid>
              {boards.map(boardListItem => (
                <Grid item key={boardListItem.id} xs={12} sm={6} md={4}>
                  <BoardListItem key={boardListItem.id} boardItem={boardListItem} />
                  <Button type="button" onClick={handleClick}>
                    Show details
                  </Button>
                </Grid>
              ))}
            </Grid>
          )}
          {isBoardDetailsShowing && <BoardDetails />}
        </Container>
      </div>
    </AuthenticatedPageLayout>
  );
}
