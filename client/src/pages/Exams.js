import React from 'react';
import { useEffect } from 'react';
import {
  Typography, TableContainer, Table, TableHead, TableRow, TableBody,
  TableCell, Paper, Accordion, AccordionSummary, AccordionDetails,
 } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/Exams.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Exams = () => {

  useEffect(()=>{
    Aos.init(()=>{
      Aos.init({
        duration: 2000
      });
    }, []);
  })

  /**create students table data */
  function CreateTableData(
    name, english, kiswahili, mathematics, biology,
    chemistry, physics, history, geography, cre, 
    business, computer, agriculture, avgmean
    ){
      return {name, english, kiswahili, mathematics, biology,
        chemistry, physics, history, geography, cre, 
        business, computer, agriculture, avgmean
        };
    };

    /**create kcse marks table analysis */
    function CreateTableAnalysis(
      grade, numberObtained, percentage , kcse2023, kcse2022, kcse2021, allStudents, meanGrade 
    ){
      return {grade, numberObtained, percentage, kcse2023, kcse2022, kcse2021, allStudents, meanGrade}
    }

  /**create students table rows data */  
  const studentRows = [
    CreateTableData('Maina Evelyne Wambui', 'A', 'A', 'A', 'A-', 'A', 'A', 'A', '-', 'A', 'A','-','-', 'A'),
    CreateTableData('Njeri Precious Waithira', 'A', 'A', 'A', '-', 'A-', 'A', 'A', 'A-', '-', 'A','A','-', 'A'),
    CreateTableData('Mwangi John Isaac', 'A', 'A', 'A', 'A', 'A', '-', 'A', 'A-', '-', '-','-','A', 'A'),
    CreateTableData('Kamau Austin Muigai', 'A', 'A', 'A', 'A-', 'A', 'A', '-', 'A', 'A', 'A-','-','-', 'A'),
    CreateTableData('Kipkirui Daniel Langat ', 'A-', 'A-', 'A', '-', 'A-', '-', 'A-', 'A-', '-','A-','-','A-', 'A-'),
    CreateTableData('Kariuki Esther Wanja', 'A-', 'A', 'A', 'A-', 'A', '-', 'A', '-', 'A', 'A-','-','A-', 'A-')
  ];

  /**create kcse marks table rows data */
  const kcseRows = [
    CreateTableAnalysis('All Students', '', '', '', '280', '300', '275'),
    CreateTableAnalysis('Mean Grade', '', '', '', 'B+', 'B', 'B'),
    CreateTableAnalysis('', 'A', '5', '7%',  '7%', '7%', '23%'),
    CreateTableAnalysis('', 'A-', '15', '20%',  '28%', '34%', '48%'),
    CreateTableAnalysis('', 'B+', '47', '25%',  '53%', '57%', '77%'),
    CreateTableAnalysis('', 'B', '35', '17%',  '27%', '47%', '53%'),
    CreateTableAnalysis('', 'B-', '45', '37%',  '22%', '37%', '83%'),
    CreateTableAnalysis('', 'C+', '28', '22%',  '18%', '35%', '44%'),
    CreateTableAnalysis('', 'C', '35', '17%',  '47%', '44%', '53%'),
    CreateTableAnalysis('', 'C-', '30', '25%',  '16%', '22%', '23%'),
    CreateTableAnalysis('', 'D+', '25', '27%',  '17%', '22%', '35%'),
    CreateTableAnalysis('', 'D', '5', '7%',  '17%',  '15%', '22%'),
    CreateTableAnalysis('', 'D-', '15', '17%',  '22%',  '19%', '27%'),
    CreateTableAnalysis('', 'E', '3', '5%',  '7%', '7%',  '13%'),
  ]

  return (
    <div className='exams-container'>
      <Typography variant='h1'>Exams</Typography>
      <hr className='horizontal'/>
      <div className='exams-content'>
        <div data-aos='fade-up-right' className='exams-leftside'>
          <div className='exams-filter'>
            <div>
              <input type='checkbox' name='kcse' id='kcse'></input>
              <label htmlFor='kcse'>KCSE Results</label>
            </div>
            <div>
              <input type='checkbox' name='form4' id='form4'></input>
              <label htmlFor='form4'>Form 4 Results</label>
            </div>
            <div>
              <input type='checkbox' name='form3' id='form3'></input>
              <label htmlFor='form3'>Form 3 Results</label>
            </div>
            <div>
              <input type='checkbox' name='form2' id='form2'></input>
              <label htmlFor='form2'>Form 2 Results</label>
            </div>
            <div>
              <input type='checkbox' name='form1' id='form1'></input>
              <label htmlFor='form1'>Form 1 Results</label>
            </div>
          </div>
          <div className='exams-accordion'>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                <Typography sx={{fontWeight:600}}>Form 4 Streams</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{display:'flex', flexWrap:'wrap', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                  <input type='checkbox' name='f4A' id='f4A'></input>
                  <label htmlFor='f4A'>4 A</label>
                </div>
                <div>
                  <input type='checkbox' name='f4B' id='f4B'></input>
                  <label htmlFor='f4B'>4 B</label>
                </div>
                <div>
                  <input type='checkbox' name='f4C' id='f4C'></input>
                  <label htmlFor='f4C'>4 C</label>
                </div>
                <div>
                  <input type='checkbox' name='f4D' id='f4D'></input>
                  <label htmlFor='f4D'>4 D</label>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                <Typography sx={{fontWeight:600}}>Form 3 Streams</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{display:'flex', flexWrap:'wrap', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                  <input type='checkbox' name='f3A' id='f3A'></input>
                  <label htmlFor='f3A'>3 A</label>
                </div>
                <div>
                  <input type='checkbox' name='f3B' id='f3B'></input>
                  <label htmlFor='f3B'>3 B</label>
                </div>
                <div>
                  <input type='checkbox' name='f3C' id='f3C'></input>
                  <label htmlFor='f3C'>3 C</label>
                </div>
                <div>
                  <input type='checkbox' name='f3D' id='f3D'></input>
                  <label htmlFor='f3D'>3 D</label>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                <Typography sx={{fontWeight:600}}>Form 2 Streams</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{display:'flex', flexWrap:'wrap', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                  <input type='checkbox' name='f2A' id='f2A'></input>
                  <label htmlFor='f2A'>2 A</label>
                </div>
                <div>
                  <input type='checkbox' name='f2B' id='f2B'></input>
                  <label htmlFor='f2B'>2 B</label>
                </div>
                <div>
                  <input type='checkbox' name='f2C' id='f2C'></input>
                  <label htmlFor='f2C'>2 C</label>
                </div>
                <div>
                  <input type='checkbox' name='f2D' id='f2D'></input>
                  <label htmlFor='f2D'>2 D</label>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                <Typography sx={{fontWeight:600}}>Form 1 Streams</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{display:'flex', flexWrap:'wrap', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                  <input type='checkbox' name='f1A' id='f1A'></input>
                  <label htmlFor='f1A'>1 A</label>
                </div>
                <div>
                  <input type='checkbox' name='f1B' id='f1B'></input>
                  <label htmlFor='f1B'>1 B</label>
                </div>
                <div>
                  <input type='checkbox' name='f1C' id='f1C'></input>
                  <label htmlFor='f1C'>1 C</label>
                </div>
                <div>
                  <input type='checkbox' name='f1D' id='f1D'></input>
                  <label htmlFor='f1D'>1 D</label>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div data-aos='fade-up-left' className='exams-rightside'>
        <h2>KCSE RESULTS</h2>
          <TableContainer data-aos='zoom-in-up' component={Paper} sx={{marginBottom:'100px'}}>
            <Table size='small' sx={{minWidth:'600'}} aria-label='simple-table'>
              <TableHead>
                <TableCell sx={{fontWeight:'600'}}>Name</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>English</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>Kiswahili</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>Mathematics</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>Biology</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>Chemistry</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>Physics</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>History</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>Geography</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>CRE</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>Business</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>Computer</TableCell>
                <TableCell align='right' sx={{fontWeight:'600'}}>Agriculture</TableCell>
                <TableCell align='center' sx={{fontWeight:'600'}}>Mean Grade</TableCell>
              </TableHead>
              <TableBody>
                {studentRows.map((row)=>(
                  <TableRow key={row.name}>
                    <TableCell component='th' scope='row'>{row.name}</TableCell>
                    <TableCell align='center'>{row.english}</TableCell>
                    <TableCell align='center'>{row.kiswahili}</TableCell>
                    <TableCell align='center'>{row.mathematics}</TableCell>
                    <TableCell align='center'>{row.biology}</TableCell>
                    <TableCell align='center'>{row.chemistry}</TableCell>
                    <TableCell align='center'>{row.physics}</TableCell>
                    <TableCell align='center'>{row.history}</TableCell>
                    <TableCell align='center'>{row.geography}</TableCell>
                    <TableCell align='center'>{row.cre}</TableCell>
                    <TableCell align='center'>{row.computer}</TableCell>
                    <TableCell align='center'>{row.business}</TableCell>
                    <TableCell align='center'>{row.agriculture}</TableCell>
                    <TableCell align='center' sx={{fontWeight:'600'}}>{row.avgmean}</TableCell>
                  </TableRow>
                  )) 
                }
              </TableBody>
            </Table>
          </TableContainer>
          <h2>KCSE Analysis</h2>
          <TableContainer data-aos='zoom-in-up' component={Paper}  sx={{marginBottom:'100px'}}>
            <Table size='small' sx={{minWidth:'600'}} aria-label='simple-table'>
              <TableHead>
                <TableCell sx={{fontWeight:'600'}}></TableCell>
                <TableCell align='center' sx={{fontWeight:'600'}}>Grade</TableCell>
                <TableCell align='center' sx={{fontWeight:'600'}}>Number Obtained</TableCell>
                <TableCell align='center' sx={{fontWeight:'600'}}>Percentage</TableCell>
                <TableCell align='center' sx={{fontWeight:'600'}}>KCSE 2023</TableCell>
                <TableCell align='center' sx={{fontWeight:'600'}}>KCSE 2022</TableCell>
                <TableCell align='center' sx={{fontWeight:'600'}}>KCSE 2021</TableCell>
              </TableHead>
              <TableBody>
                {kcseRows.map((row)=>(
                  <TableRow key={row.name}>
                    <TableCell component='th' scope='row'>{row.grade}</TableCell>
                    <TableCell align='center'>{row.numberObtained}</TableCell>
                    <TableCell align='center'>{row.percentage}</TableCell>
                    <TableCell align='center'>{row.kcse2023}</TableCell>
                    <TableCell align='center'>{row.kcse2022}</TableCell>
                    <TableCell align='center'>{row.kcse2021}</TableCell>
                    <TableCell align='center'>{row.allStudents}</TableCell>
                    <TableCell align='center'>{row.meanGrade}</TableCell>
                  </TableRow>
                  )) 
                }
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div> 
  )
}

export default Exams;