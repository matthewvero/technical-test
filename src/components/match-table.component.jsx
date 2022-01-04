import React, { useEffect, useRef } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const headings = ['MSTID', 'Match', 'First', 'Last', 'Nationality', 'SOD', 'Score', 'Today', 'Hole1Strokes', 'Hole1STP', 'Hole2Strokes', 'Hole2STP', 'Hole3Strokes', 'Hole3STP', 'Hole4Strokes', 'Hole4STP', 'Hole5Strokes', 'Hole5STP', 'Hole6Strokes', 'Hole6STP', 'Hole7Strokes', 'Hole7STP', 'Hole8Strokes', 'Hole8STP', 'Hole9Strokes', 'Hole9STP', 'OutStrokes', 'OutSTP', 'Hole10Strokes', 'Hole10STP', 'Hole11Strokes', 'Hole11STP', 'Hole12Strokes', 'Hole12STP', 'Hole13Strokes', 'Hole13STP', 'Hole14Strokes', 'Hole14STP', 'Hole15Strokes', 'Hole15STP', 'Hole16Strokes', 'Hole16STP', 'Hole17Strokes', 'Hole17STP', 'Hole18Strokes', 'Hole18STP', 'InStrokes', 'InSTP', 'TotalStrokes', 'TotalSTP', 'tournamentID', 'round', 'orderInMatch', 'lastUpdated', 'status', 'leaderboardID', 'teeStart', 'teeTime', 'holesPlayed', 'course', 'matchID', 'Amature', 'isTeam', 'CalculatedRankInteger', 'position', 'UniquePosition', 'TVName', 'Eastern', 'Handicap', 'SortPriority', 'Sex'];

const MatchTable = ({ matchData }) => {
      const tableRef = useRef(null);

      useEffect(() => {
            tableRef.current.scrollTo(0, tableRef.current.scrollHeight);
      }, [matchData])

      return (
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }} ref={tableRef}>
                        <Table stickyHeader aria-label="sticky table">
                              <TableHead>
                                    <TableRow>
                                          {
                                                headings.map((el, idx) => <TableCell key={idx} align="right" style={{ minWidth: '80px' }}>{el}</TableCell>)
                                          }
                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {
                                          matchData.map((row, idx) =>
                                                <TableRow
                                                      key={idx}
                                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                      {
                                                            Object.keys(row).map((cell, idx) => {
                                                                  return (
                                                                        <TableCell align="right" key={idx}>{row[cell]}</TableCell>
                                                                  )
                                                            })
                                                      }
                                                </TableRow>
                                          )}
                              </TableBody>
                        </Table>
                  </TableContainer>
            </Paper>
      );
}

export default MatchTable;