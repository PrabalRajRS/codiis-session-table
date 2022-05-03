import React from 'react'
import { Table } from 'react-bootstrap'
import "./SessionTable.css";

const SessionTable = (props) => {
    return (
        <Table responsive="md">
            <thead>
                <tr>
                    <th>Period</th>
                    <th>Faculty</th>
                    <th>Session</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Duration</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.items?.map(item => (
                        <tr key={item.session_id}>
                            <td>{item.period.split(" ").pop()}</td>
                            <td>{item.faculty_name}</td>
                            <td>{item.session_name}</td>
                            <td>{item.session_start_time}</td>
                            <td>{item.session_end_time}</td>
                            <td>{item.duration}</td>
                            <td className={item.session_status === "Completed" ? "red" : "green"}>
                                {item.session_status}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default SessionTable