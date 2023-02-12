from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView

from apps.accounts.urls import accounts_urlpatterns

# Admin Page Title & Sub-title
admin.site.site_header = 'DjangoReact Admin'
admin.site.index_title = 'Admin Dashboard'

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += accounts_urlpatterns # add URLs for authentication

urlpatterns += [re_path('(^(?!(api|admin)).*$)',
                        TemplateView.as_view(template_name='index.html'))]