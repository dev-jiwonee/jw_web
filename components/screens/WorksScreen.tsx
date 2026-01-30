import SectionLayout from "../blocks/SectionLayout";
import WorkList from "../blocks/WorkList";

const WorksScreen = async () => {

  return (
    <SectionLayout id="works" title="Works" bgColor="bg-orange-50/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
        <WorkList />
      </div>
    </SectionLayout>
  );
};

export default WorksScreen;
