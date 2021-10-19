import http from "@/http-common";

/* eslint-disable */
class DashboardDataService {
  getAll(): Promise<any> {
    return http.get("/dashboard/analytics");
  }
}

export default new DashboardDataService();
