function Reports() {
  return (
    <section className="text-gray-700 md:p-4 md:container mx-auto">
      <div className="h-17.5 content-center">
        <h1 className="text-base font-semibold text-center md:text-right">
          گزارش‌ها
        </h1>
      </div>

      <div className="bg-white rounded-2xl md:p-6 mx-auto min-h-[calc(100vh-11.875rem)]">
        <div className="bg-gray-100 p-4 rounded-t-lg flex items-center justify-between">
          <p>وضعیت درخواست</p>

          <p>تاریخ ثبت سفارش</p>
          
          <p>تعداد سفارش‌ها</p>
          
          <p>نوع فایل</p>
          
          <p>دانلود فایل</p>
        </div>
      </div>
    </section>
  );
}

export default Reports;
