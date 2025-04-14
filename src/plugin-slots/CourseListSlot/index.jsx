import React from 'react';

import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { CourseList, courseListDataShape } from 'containers/CoursesPanel/CourseList';

export const CourseListSlot = ({ courseListData }) => (
  <PluginSlot id="course_list_slot" id_aliases={['course_list_slot_alias']} pluginProps={{ courseListData }}>
    <CourseList courseListData={courseListData} />
  </PluginSlot>
);

CourseListSlot.propTypes = {
  courseListData: courseListDataShape,
};

export default CourseListSlot;
