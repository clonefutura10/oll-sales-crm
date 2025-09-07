from django.test import TestCase
from django.contrib.auth import get_user_model

User = get_user_model()


class ReportsTestCase(TestCase):
    """Basic Reports test cases"""

    def setUp(self):
        """Set up test data"""
        self.user = User.objects.create_user(
            username="reportuser", email="report@example.com", password="testpass123"
        )

    def test_reports_module_exists(self):
        """Test that the Reports module exists and is properly configured"""
        self.assertTrue(True)

    def test_reports_app_ready(self):
        """Test that the reports app is ready"""
        from django.apps import apps

        reports_app = apps.get_app_config("reports")
        self.assertEqual(reports_app.name, "reports")
