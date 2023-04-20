import React, { useState } from 'react';

import useFetch from '../utilities/useFetch';

export default function Metrics() {
  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
  } = useFetch('tasks');

  // Calculate metrics based on tasks data
  const totalTasks = tasks ? tasks.length : 0;
  const completedTasks = tasks
    ? tasks.filter(
        (task) =>
          task.completed === true &&
          new Date(task.dueDate) > new Date(task.updatedAt),
      ).length
    : 0;
  const completedLateTasks = tasks
    ? tasks.filter(
        (task) =>
          task.completed === true &&
          new Date(task.dueDate) < new Date(task.updatedAt),
      ).length
    : 0;
  const overdueTasks = tasks
    ? tasks.filter(
        (task) =>
          task.completed === false &&
          new Date(task.dueDate) < new Date(task.updatedAt),
      ).length
    : 0;

  const pendingTasks = tasks
    ? tasks.filter(
        (task) =>
          task.completed === false &&
          new Date(task.dueDate) > new Date(task.updatedAt),
      ).length
    : 0;

  // Calculate metrics based on tasks data for current month
  const currentDate = new Date();
  const currentMonthTasks =
    tasks?.filter(
      (task) => new Date(task.dueDate).getMonth() === currentDate.getMonth(),
    ) ?? [];
  const currentTotalTasks = currentMonthTasks.length;
  const currentCompletedTasks = currentMonthTasks.filter(
    (task) =>
      task.completed === true &&
      new Date(task.dueDate) > new Date(task.updatedAt),
  ).length;
  const currentCompletedLateTasks = currentMonthTasks.filter(
    (task) =>
      task.completed === true &&
      new Date(task.dueDate) < new Date(task.updatedAt),
  ).length;
  const currentOverdueTasks = currentMonthTasks.filter(
    (task) =>
      task.completed === false &&
      new Date(task.dueDate) < new Date(task.updatedAt),
  ).length;
  const currentPendingTasks = currentMonthTasks.filter(
    (task) =>
      task.completed === false &&
      new Date(task.dueDate) > new Date(task.updatedAt),
  ).length;

  // Calculate metrics based on tasks data for previous month
  const prevDate = new Date();
  prevDate.setMonth(prevDate.getMonth() - 1);
  const prevMonthTasks =
    tasks?.filter(
      (task) => new Date(task.dueDate).getMonth() === prevDate.getMonth(),
    ) ?? [];
  const prevTotalTasks = prevMonthTasks.length;
  const prevCompletedTasks = prevMonthTasks.filter(
    (task) =>
      task.completed === true &&
      new Date(task.dueDate) > new Date(task.updatedAt),
  ).length;
  const prevCompletedLateTasks = prevMonthTasks.filter(
    (task) =>
      task.completed === true &&
      new Date(task.dueDate) < new Date(task.updatedAt),
  ).length;
  const prevOverdueTasks = prevMonthTasks.filter(
    (task) =>
      task.completed === false &&
      new Date(task.dueDate) < new Date(task.updatedAt),
  ).length;
  const prevPendingTasks = prevMonthTasks.filter(
    (task) =>
      task.completed === false &&
      new Date(task.dueDate) > new Date(task.updatedAt),
  ).length;

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <>
      <link
        href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css'
        rel='stylesheet'
        id='bootstrap-css'
      />
      <script src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js' />
      <script src='//code.jquery.com/jquery-1.11.1.min.js' />

      <div className='container-fluid'>
        <div className='row row-md-12'>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h4 className='panel-title'>
                <a
                  data-toggle='collapse'
                  data-parent='#accordion'
                  href='#collapse1'
                >
                  Total Tasks
                </a>
              </h4>
            </div>
            <div id='collapse1' className='panel-collapse collapse in'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <span className='badge'>{totalTasks}</span> Total
                </li>
                <li className='list-group-item'>
                  <span className='badge'>{completedTasks}</span> Completed
                </li>
                <li className='list-group-item'>
                  <span className='badge'>{completedLateTasks}</span>
                  Completed Late
                </li>
                <li className='list-group-item'>
                  <span className='badge'>{overdueTasks}</span> Overdue
                </li>
                <li className='list-group-item'>
                  <span className='badge'>{pendingTasks}</span> Pending
                </li>
                last month
              </ul>
            </div>
          </div>
        </div>

        <div className='col col-md-13'>
          <div className='row'>
            <h4>{monthNames[currentDate.getMonth()]} Task Rates</h4>
            <div>
              <div className='task-rate'>
                <span className='rate-category'>Incomplete Rate</span>
                <span className='rate-percentage pull-right strong'>
                  {`${Math.round(
                    (currentOverdueTasks /
                      (currentTotalTasks - currentPendingTasks)) *
                      100,
                    2,
                  )}%`}
                </span>
                <div className='progress'>
                  <div
                    className='progress-bar progress-bar-danger'
                    role='progressbar'
                    style={{
                      width: `${
                        (currentOverdueTasks /
                          (currentTotalTasks - currentPendingTasks)) *
                        250
                      }px`,
                    }}
                  >
                    {currentOverdueTasks}
                  </div>
                </div>
              </div>
              <div className='task-rate'>
                <span className='rate-category'>On-Time Rate</span>
                <span className='rate-percentage pull-right strong'>
                  {`${Math.round(
                    (currentCompletedTasks /
                      (currentTotalTasks - currentPendingTasks)) *
                      100,
                    2,
                  )}%`}
                </span>
                <div className='progress'>
                  <div
                    className='progress-bar progress-bar-success'
                    role='progressbar'
                    style={{
                      width: `${
                        (currentCompletedTasks /
                          (currentTotalTasks - currentPendingTasks)) *
                        250
                      }px`,
                    }}
                  >
                    {currentCompletedTasks}
                  </div>
                </div>
              </div>

              <div className='task-rate'>
                <span className='rate-category'>Overdue Completion Rate</span>
                <span className='rate-percentage pull-right strong'>
                  {`${Math.round(
                    (currentCompletedLateTasks /
                      (currentTotalTasks - currentPendingTasks)) *
                      100,
                    2,
                  )}%`}
                </span>
                <div className='progress'>
                  <div
                    className='progress-bar progress-bar-warning'
                    role='progressbar'
                    style={{
                      width: `${
                        (currentCompletedLateTasks /
                          (currentTotalTasks - currentPendingTasks)) *
                        250
                      }px`,
                    }}
                  >
                    {currentCompletedLateTasks}
                  </div>
                </div>
              </div>

              <div className='task-rate'>
                <span className='rate-category'>Pending Task Rate</span>
                <span className='rate-percentage pull-right strong'>
                  {`${Math.round(
                    (currentPendingTasks / currentTotalTasks) * 100,
                    2,
                  )}%`}
                </span>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{
                      width: `${
                        (currentPendingTasks / currentTotalTasks) * 250
                      }px`,
                    }}
                  >
                    {currentPendingTasks}
                  </div>
                </div>
              </div>
            </div>

            <div className='row-md-5'>
              <h4>{monthNames[currentDate.getMonth() - 1]} Task Rates</h4>
              <div className='d-flex justify-content-between align-items-center'>
                <span>Incomplete Rate</span>
                <span className='pull-right strong'>{`${Math.round(
                  (prevOverdueTasks / (prevTotalTasks - prevPendingTasks)) *
                    100,
                  2,
                )}%`}</span>
              </div>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-danger'
                  role='progressbar'
                  style={{
                    width:
                      (prevOverdueTasks / (prevTotalTasks - prevPendingTasks)) *
                      250,
                  }}
                >
                  {prevOverdueTasks}
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <span>On-Time Rate</span>
                <span className='pull-right strong'>{`${Math.round(
                  (prevCompletedTasks / (prevTotalTasks - prevPendingTasks)) *
                    100,
                  2,
                )}%`}</span>
              </div>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-success'
                  role='progressbar'
                  style={{
                    width:
                      (prevCompletedTasks /
                        (prevTotalTasks - prevPendingTasks)) *
                      250,
                  }}
                >
                  {prevCompletedTasks}
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <span>Overdue Completion Rate</span>
                <span className='pull-right strong'>{`${Math.round(
                  (prevCompletedLateTasks /
                    (prevTotalTasks - prevPendingTasks)) *
                    100,
                  2,
                )}%`}</span>
              </div>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-warning'
                  role='progressbar'
                  style={{
                    width:
                      (prevCompletedLateTasks /
                        (prevTotalTasks - prevPendingTasks)) *
                      250,
                  }}
                >
                  {prevCompletedLateTasks}
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <span>Pending Task Rate</span>
                <span className='pull-right strong'>{`${Math.round(
                  (prevPendingTasks / prevTotalTasks) * 100,
                  2,
                )}%`}</span>
              </div>
              <div className='progress'>
                <div
                  className='progress-bar'
                  role='progressbar'
                  style={{ width: (prevPendingTasks / prevTotalTasks) * 250 }}
                >
                  {prevPendingTasks}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
